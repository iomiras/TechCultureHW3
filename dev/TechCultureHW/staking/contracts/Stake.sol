// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

// The address of the token contract

// An instance of the token contract's interface
abstract contract TokenInterface {
    function transferFrom(
        address _from,
        address _to,
        uint _value
    ) public virtual returns (bool);

    function balanceOf(address _owner) public view virtual returns (uint);

    function allowance(
        address _owner,
        address _spender
    ) public view virtual returns (uint);
}

contract Staking {
    // Stake mapping
    mapping(address => uint256) public stakes;

    // Reward percentage
    uint256 public rewardPercentage;

    // Minimum time required to claim reward
    uint256 public minTime;

    // The timestamp at which the contract was deployed
    uint256 public deploymentTime;

    address private tokenContractAddress;

    TokenInterface token = TokenInterface(tokenContractAddress);

    constructor() {
        rewardPercentage = 10; // 10% reward
        minTime = 120; // 2 minutes in seconds
        deploymentTime = block.timestamp;
        tokenContractAddress = 0x9A0b78e0a462355833705Bc447EB87Cfb02b86c2;
    }

    // Function to stake tokens
    function stake(uint256 _value) public payable {
        require(_value > 0, "You cannot stake 0 or less");

        // Decrease msg.sender's balance
        IERC20 tokenDec = IERC20(address(this));
        tokenDec.transferFrom(msg.sender, address(this), _value);

        // Update stakes mapping
        stakes[msg.sender] += _value;
    }

    // Function to claim reward
    function claimReward() public {
        require(
            block.timestamp >= deploymentTime + minTime,
            "You must wait at least 2 minutes to claim reward"
        );
        uint256 reward = (stakes[msg.sender] * rewardPercentage) / 100;

        address payable msgSender = payable(msg.sender);
        msgSender.transfer(reward);
    }

    // Function to unstake tokens
    function unstake(uint256 _value) public payable {
        require(
            stakes[msg.sender] >= _value,
            "You do not have enough tokens staked"
        );

        // Increase msg.sender's balance
        ERC20 tokenInc = ERC20(address(this));
        tokenInc.transfer(msg.sender, _value);

        // Update stakes mapping
        stakes[msg.sender] -= _value;
    }
}
