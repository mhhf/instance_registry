var ins;
contract('Instance', function(accounts) {
  
  before( function() {
    
    ins = Instance.at( Instance.deployed_address );
    
  });
  
  it("should be zero at beginning", function(done) {
    
    ins.length.call("asd").then( num => {
      assert.equal(num.toString(),'0');
      done();
    });
    
  });
  
  it("should increase instances number on adding", function(done){
    
    var hash = 'QmeomffUNfmQy76CQGy9NdmqEnnHU9soCexBnGU3ezPHVH';
    var addr = '0x19eaa2d242cace5754f1dcc3cf94d7a692dd8de2';
    var name = 'Spore';
    ins.add( hash, name, addr ).then( tx => {
      return ins.length.call(hash);
    }).then( num => {
      assert.equal(num.toString(), '1');
      done();
    });
    
  });
  
  it("should return the right address and name", function(done){
    
    var hash = 'QmeomffUNfmQy76CQGy9NdmqEnnHU9soCexBnGU3ezPHVH';
    var addr = '0x19eaa2d242cace5754f1dcc3cf94d7a692dd8de2';
    var name = 'Spore';
    
    ins.getAt.call( hash, 0 ).then( a => {
      assert.equal( web3.toAscii(a[0]).replace(/\u0000/g,''), name )
      assert.equal( addr, a[1] )
      done();
    });
    
    
  });
});
