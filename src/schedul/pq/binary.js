goog.provide('schedul.pq.Binary');

goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.object');
goog.require('schedul.pq.Base');



/**
 * @constructor
 * @extends {schedul.pq.Base}
 * @param {!function(!number, !number):!boolean} compFunction
 */
schedul.pq.Binary = function(compFunction) {
  goog.base(this);
  goog.asserts.assertFunction(compFunction);

  this.compFunction_ = compFunction;
  this.array_ = [];
  this.alreadyContainingValuesSet_ = {};
};
goog.inherits(schedul.pq.Binary, schedul.pq.Base);


/**
 * @private
 * @param {!number} i
 * @param {!number} j
 */
schedul.pq.Binary.prototype.swap_ = function(i, j) {
  goog.asserts.assertNumber(i);
  goog.asserts.assertNumber(j);

  var t = this.array_[i];
  this.array_[i] = this.array_[j];
  this.array_[j] = t;
};


/**
 * @private
 * @param {!number} i
 */
schedul.pq.Binary.prototype.bubbleDown_ = function(i) {
  goog.asserts.assertNumber(i);

  var left = 2 * i + 1;
  var right = left + 1;
  var largest = i;
  if (left < this.array_.length && this.compFunction_(
      this.array_[left], this.array_[largest])) {
    largest = left;
  }
  if (right < this.array_.length && this.compFunction_(
      this.array_[right], this.array_[largest])) {
    largest = right;
  }
  if (largest != i) {
    this.swap_(largest, i);
    this.bubbleDown_(largest);
  }
};


/**
 * @private
 * @param {!number} i
 */
schedul.pq.Binary.prototype.bubbleUp_ = function(i) {
  goog.asserts.assertNumber(i);

  if (i <= 0) {
    return;
  }
  var parent = Math.floor((i - 1) / 2);
  if (this.compFunction_(this.array_[i], this.array_[parent])) {
    this.swap_(i, parent);
    this.bubbleUp_(parent);
  }
};


/**
 * @override
 */
schedul.pq.Binary.prototype.pop = function() {
  goog.asserts.assert(!goog.array.isEmpty(this.array_.length),
      'pop() called on empty binary heap');

  var smallestValue = this.array_[0];
  var last = this.array_.length - 1;
  this.array_[0] = this.array_[last];
  this.array_.length = last;
  if (last > 0) {
    this.bubbleDown_(0);
  }
  goog.object.remove(this.alreadyContainingValuesSet_, smallestValue);
  goog.asserts.assertNumber(smallestValue);

  return smallestValue;
};


/**
 * @override
 */
schedul.pq.Binary.prototype.peek = function() {
  if (goog.array.isEmpty(this.array_)) {
    return null;
  }
  return this.array_[0];
};


/**
 * @override
 */
schedul.pq.Binary.prototype.push = function(value) {
  goog.asserts.assertNumber(value);

  if (goog.object.containsKey(this.alreadyContainingValuesSet_, value)) {
    return;
  }
  this.alreadyContainingValuesSet_[value] = 1;
  this.array_.push(value);
  this.bubbleUp_(this.array_.length - 1);
};


/**
 * @override
 */
schedul.pq.Binary.prototype.size = function() {
  return this.array_.length;
};


/**
 * @return {!string}
 */
schedul.pq.Binary.prototype.dump = function() {
  return this.array_.join(', ');
};
