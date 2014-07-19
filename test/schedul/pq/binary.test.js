require('nclosure').nclosure({additionalDeps:['deps.js']});
expect = require('expect.js');

goog.require('schedul.pq.Base');
goog.require('schedul.pq.Binary');

describe('schedul.pq.Binary with schedul.pq.Base.min',function(){
  var heap = new schedul.pq.Binary(schedul.pq.Base.min);
  heap.push(3);
  heap.push(1);
  heap.push(4);

  it('should pop first from min',function(){
    expect(heap.size()).to.be(3);
    expect(heap.peek()).to.be(1);
    expect(heap.pop()).to.be(1);
  });

  it('should pop second from min',function(){
    expect(heap.size()).to.be(2);
    expect(heap.peek()).to.be(3);
    expect(heap.pop()).to.be(3);
  });

  it('should pop third from min',function(){
    expect(heap.size()).to.be(1);
    expect(heap.peek()).to.be(4);
    expect(heap.pop()).to.be(4);
  });

  it('should pop nothing left at last',function(){
    expect(heap.size()).to.be(0);
  });
});

describe('schedul.pq.Binary with schedul.pq.Base.max',function(){
  var heap = new schedul.pq.Binary(schedul.pq.Base.max);
  heap.push(3);
  heap.push(1);
  heap.push(4);

  it('should pop first from max',function(){
    expect(heap.size()).to.be(3);
    expect(heap.peek()).to.be(4);
    expect(heap.pop()).to.be(4);
  });

  it('should pop second from max',function(){
    expect(heap.size()).to.be(2);
    expect(heap.peek()).to.be(3);
    expect(heap.pop()).to.be(3);
  });

  it('should pop third from max',function(){
    expect(heap.size()).to.be(1);
    expect(heap.peek()).to.be(1);
    expect(heap.pop()).to.be(1);
  });

  it('should pop nothing left at last',function(){
    expect(heap.size()).to.be(0);
  });
});
