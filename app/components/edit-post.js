import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';

export default Component.extend({
  postObject: oneWay('model'),
  actions : {
    toEditPost(model){
      if(model.get('hasDirtyAttributes')){
        model.set('modifiedtime',new Date());
        model.save();
        alert('Changes Saved')
      }
      else {
        alert('Nothing has changed');
      }
      this.attack(model.id);
    },
    toCancelEdit(model){
      if(model.get('hasDirtyAttributes')){
        model.rollbackAttributes();
        alert('Changes Reverted');
      }
      else {
        alert('Nothing has changed');
      }
      this.attack(model.id);
    }
  }
});
