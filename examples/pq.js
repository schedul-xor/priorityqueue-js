goog.require('goog.dom');
goog.require('goog.ui.Button');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.Textarea');
goog.require('schedul.pq.Base');
goog.require('schedul.pq.Binary');


var heap = new schedul.pq.Binary(schedul.pq.Base.min);

var pushingDom = goog.dom.getElement('pushing');
var pushingLabelInput = new goog.ui.LabelInput('Pushing');
pushingLabelInput.render(pushingDom);

var pushButton = new goog.ui.Button('Push');
pushButton.render(goog.dom.getElement('push_button'));

var dumpTextarea = new goog.ui.Textarea('');
dumpTextarea.render(goog.dom.getElement('dump'));

var popButton = new goog.ui.Button('Pop');
popButton.render(goog.dom.getElement('pop_button'));

var poppedDom = goog.dom.getElement('popped');
var poppedLabelInput = new goog.ui.LabelInput('Popped');
poppedLabelInput.render(poppedDom);

var updateDump = function(){
  var dumped = heap.dump();
  dumpTextarea.setValue(dumped);
};

updateDump();

goog.events.listen(pushButton,goog.ui.Component.EventType.ACTION, function(e) {
  var pushingValue = Number(pushingLabelInput.getValue());
  heap.push(pushingValue);
  updateDump();
  pushingLabelInput.setValue('');
});

goog.events.listen(popButton,goog.ui.Component.EventType.ACTION, function(e) {
  var poppedValue = heap.pop();
  poppedLabelInput.setValue(poppedValue+'');
  updateDump();
});
