// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;


contract Token {
    uint public totalSuppl = 1000000e18;
    
    mapping(address => uint) public balancOf;
    mapping(address => mapping(address => uint)) public allowance;

    mapping(address => bool) public blackList;
    
    address public owner;
    string public name = "HelloWorld";
    string public symbol = "HWD";
    uint8 public decimal = 18;
    
    function totalSupply() external view returns (uint) {
        return totalSuppl;
    }

    function balanceOf(address account) external view returns (uint) {
        return balancOf[account];
    }

    function blockUser(address addressToBlock) external returns (bool) {
        require(!blackList[addressToBlock], "This user is already blocked");
        blackList[addressToBlock] = true;
        return true;
    }

    function transfer(address recipient, uint amount) external returns (bool)
    {
        require(!blackList[msg.sender], "You can't send money. You are in Black list");
        balancOf[msg.sender] -= amount;
        balancOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function mint() public {
        require(!blackList[msg.sender], "You can't mint. You are in Black list");
        balancOf[msg.sender] = 500e18;
    }

    function allowanc(address owner, address spender) external view returns (uint) {
        return allowance[owner][spender];
    }

    function approve(address spender, uint amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approve(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint amount) external returns (bool) {
        allowance[sender][recipient] -= amount;
        balancOf[sender] -= amount;
        balancOf[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    event Transfer(address indexed from, address indexed to, uint amount);
    event Approve(address indexed owner, address indexed spender, uint amount);
}
