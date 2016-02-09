/// @title 
/// @author Denis Erfurt
contract Instance {
  
  struct Contract {
    bytes32 name;
    address addr;
  }
  
  mapping (string => Contract[]) instances;
  
  function Instance() {
    
  }
  
  event Add( string link, bytes32 name, address addr );
  
  function add ( string link, bytes32 name, address addr ) {
    var arr = instances[link];
    arr.length ++;
    arr[ arr.length - 1 ] = Contract({
      name: name,
      addr: addr
    });
    Add( link, name, addr );
  }
  
  function length( string link ) constant returns( uint ) {
    return instances[link].length;
  }
  
  function getAt( string link, uint index ) constant returns ( bytes32 name, address addr ) {
    addr = instances[link][index].addr;
    name = instances[link][index].name;
  }

}
