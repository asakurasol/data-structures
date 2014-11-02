describe('bloomFilter', function(){
  var bloomFilter;

  beforeEach(function(){
    bloomFilter = new BloomFilter(5000);
  });

  it('should be an instance of BloomFilter', function() {
    expect(bloomFilter).to.be.instanceof(BloomFilter);
  });

  it('should have access to additional hash functions that return numbers less than limit', function(){
    expect(hashFuncThree("a", 18)).to.be.a('number');
    expect(hashFuncTwo("b", 18)).to.be.a('number');
    expect(hashFuncTwo("key", 18)).not.to.equal(hashFuncThree("key",18));
  });

  it('should have methods set and get', function(){
    expect(bloomFilter.set).to.be.a('function');
    expect(bloomFilter.get).to.be.a('function');
  });

  it('should save key value', function() {
    bloomFilter.set('puppies');
    expect(bloomFilter.get('puppies')).to.be.true;
  });

})
