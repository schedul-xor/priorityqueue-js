goog.provide('schedul.pq.Base');

goog.require('goog.asserts');



/**
 * @constructor
 */
schedul.pq.Base = function() {};


/**
 * @return {?number}
 */
schedul.pq.Base.prototype.pop = goog.abstractMethod;


/**
 * @param {!number} value
 */
schedul.pq.Base.prototype.push = goog.abstractMethod;


/**
 * @return {!number}
 */
schedul.pq.Base.prototype.size = goog.abstractMethod;


/**
 * @return {?number}
 */
schedul.pq.Base.prototype.peek = goog.abstractMethod;


/**
 * @param {!number} i
 * @param {!number} j
 * @return {!boolean}
 */
schedul.pq.Base.max = function(i, j) {
  goog.asserts.assertNumber(i);
  goog.asserts.assertNumber(j);
  return i > j;
};


/**
 * @param {!number} i
 * @param {!number} j
 * @return {!boolean}
 */
schedul.pq.Base.min = function(i, j) {
  goog.asserts.assertNumber(i);
  goog.asserts.assertNumber(j);

  return i < j;
};
