import * as JFlowInstance from '@joskii/jflow-core';
/**
 * JFlow {@link BaseLink} 的 vue 封装 
 * @module jflow-link
 * @property {BaseLink~Configs} configs - 传给 BseLink 的配置, from, to属性会被替换为jflowid对应的 Instance
 * @property {String} from - source
 * @property {String} to - source
 */
export default function (nameNode) {
    const builder =  typeof nameNode === 'string'
        ? JFlowInstance[nameNode]
        : nameNode;
    return {
        inject: [ 'addToLinkStack', 'removeFromLinkStack', 'getJFlow' ],
        props: {
            configs: {
                type: Object,
                default: function () {
                    return {};
                },
            },
            from: Object,
            to: Object,
        },
        // watch: {
        //     from() {
        //         this.resetLink();
        //     },
        //     to() {
        //         this.resetLink();
        //     },
        //     configs(val, oldVal) {
        //         this.setConfig(val);
        //     },
        // },
        render: function (createElement) {
            return null;
        },
        created() {
            const jflow = this.getJFlow();
            const fromInstance = jflow.getRenderNodeBySource(this.from);
            const toInstance = jflow.getRenderNodeBySource(this.to);
            this.createInstance(fromInstance, toInstance);
        },
        mounted() {
            this.unwatch = this.$watch(() => [this.from, this.to, this.configs], () => {
                this.refreshConfig();
            })
        },
        methods: {
            createInstance(fromInstance, toInstance) {
                if(fromInstance && toInstance) {
                    this._jflowInstance = new builder({
                        ...this.configs,
                        from: fromInstance,
                        to: toInstance,
                    });
                    this.bindListeners();
                    this.addToLinkStack(this._jflowInstance, this.from, this.to);   
                }
            },
            refreshConfig() {
                const jflow = this.getJFlow();
                const fromInstance = jflow.getRenderNodeBySource(this.from);
                const toInstance = jflow.getRenderNodeBySource(this.to);
                if(!this._jflowInstance) {
                    this.createInstance(fromInstance, toInstance);
                } else {
                    this._jflowInstance.setConfig({
                        ...this.configs,
                        from: fromInstance,
                        to: toInstance,
                    });
                }
                
            },
            // setConfig(val) {
            //     const conf = {};
            //     Object.keys(val).forEach(k => {
            //         if(k !=='from' && k !== 'to'){
            //             conf[k] = val[k];
            //         }
            //     })
            //     this._jflowInstance.setConfig(conf);
            // },
            // resetLink() {
            //     const jflow = this.getJFlow();
            //     const fromInstance = jflow.getRenderNodeBySource(this.from);
            //     const toInstance = jflow.getRenderNodeBySource(this.to);
            //     this._jflowInstance.from = fromInstance;
            //     this._jflowInstance.to = toInstance;
            // },
            bindListeners() {
                Object.keys(this.$listeners).map(event => {
                    const func = this.$listeners[event];
                    this._jflowInstance.addEventListener(event, func);
                })
            }
        },
        destroyed() {
            this.unwatch();
            if(this._jflowInstance) {
                this.removeFromLinkStack(this._jflowInstance, this.from, this.to);
            }
        }
    }
}