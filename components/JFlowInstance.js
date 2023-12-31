import * as JFlowInstance from '@joskii/jflow-core';
import diff from 'object-diff';
export default function (nameNode) {
    const builder =  typeof nameNode === 'string'
        ? JFlowInstance[nameNode]
        : nameNode;
    return {
        inject: ['addToStack', 'removeFromStack'],
        props: {
            configs: {
                type: Object,
                default: function () {
                    return {};
                },
            },
            visible: {
                type: Boolean,
                default: true,
            },
            source: {
                type: Object,
            }
        },
        watch: {
            configs(val, oldVal) {
                // console.log(val, JSON.stringify(val) === JSON.stringify(oldVal), )
                const diffed = diff(val, oldVal);
                if(Object.keys(diffed).length === 0){
                    return;
                }
                //
                // const reflowKeys = Object.keys(diffed).filter(k => {
                //     const lk = k.toLowerCase();
                //     return !(lk.endsWith('color') || k.endsWith('style'));
                // });
                this._jflowInstance.setConfig(val);
                // console.log('recalculateUp')
                // this._jflowInstance.recalculateUp();
                // console.log(reflowKeys.length, val)
                // if(reflowKeys.length) {
                //     this._jflowInstance._belongs.recalculateUp();
                // }
                // this._jflowInstance._jflow._render();
            },
            '$listeners' (val, oldVal) {
                let news = [];
                let deletes = [];
                const vnew = Object.keys(val).map(e => ({ event: e, handler: val[e] }));
                const vold = Object.keys(oldVal).map(e => ({ event: e, handler: oldVal[e] }));
                vnew.forEach((v) => {
                    const hnew = v.handler;
                    if(!vold.find((q) => q.handler === hnew)) {
                        news.push(v);
                    }
                });
                vold.forEach((v) => {
                    const hold = v.handler;
                    if(!vnew.find((q) => q.handler === hold)) {
                        deletes.push(v);
                    }
                });

                news.forEach((v) => {
                    this._jflowInstance.addEventListener(v.event, v.handler);
                });
                deletes.forEach((v) => {
                    this._jflowInstance.removeEventListener(v.event, v.handler);
                });
            },
            visible(val) {
                this._jflowInstance.visible = val;
                // this._jflowInstance._belongs.recalculateUp();
                // this._jflowInstance._jflow._render();
            },
            source(val) {
                this._jflowInstance._jflow.setRenderNodeBySource(val, this._jflowInstance);
            }
        },
        render: function (createElement) {
            return null;
        },
        created() {
            this._jflowInstance =  new builder(this.configs);
            this._jflowInstance.visible = this.visible;
            this.bindListeners();
            this.addToStack(this._jflowInstance, this.source);
        },
        // updated() {
        //     console.log('recalculateUp')

        // },
        destroyed() {
            this._jflowInstance.destroy();
            this.removeFromStack(this._jflowInstance);
        },
        methods: {
            bindListeners() {
                Object.keys(this.$listeners).map(event => {
                    const func = this.$listeners[event];
                    this._jflowInstance.addEventListener(event, func);
                })
            }
        }
    }
}