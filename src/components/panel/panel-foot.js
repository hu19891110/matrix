import Component from '../../app/component';

export default class Panel_Foot extends Component {
    constructor(){
        super();
        this.name = 'panel-foot';
    }

    _template(){
        if ( typeof this.template === 'function' ){
            return this.template();
        }
        return `<div class="mx-panel-foot"><slot></slot></div>`;
    }
}
