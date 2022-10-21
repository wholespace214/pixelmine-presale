import { ethers } from "ethers";

export default {
  install: (app, options) => {
    var provider = null;
    var signer = null;
    var accounts = null;
    var blockchain = {};
    blockchain.ethers = ethers;
    blockchain.ethereum = null;
    blockchain.farm = null;
    blockchain.helmet = "0x9CA455Ed55754A1b9c31bfE235284CAe358BC353";
    blockchain.shovel = "0x0648D77453E8b358fe6567749fB638d94Aa1CC44";
    blockchain.getAccounts = function () {
      return accounts;
    };
    blockchain.setAccounts = function (acts) {
      accounts = acts;
    };
    blockchain.getProvider = function () {
      return provider;
    };
    blockchain.setProvider = function (provi) {
      provider = new ethers.providers.Web3Provider(provi);
      return ethers;
    };
    blockchain.getSigner = function () {
      if (signer == null) signer = provider.getSigner();
      /*.then(sign =>{
                signer = sign;
                return sign;
            });*/

      return signer;
    };

    blockchain.toHash = function (texto) {
      if (/(0x)/.test(texto)) {
        return ethers.utils.keccak256(texto);
      } else return ethers.utils.id(texto);
    };

    //Vue.prototype.$Rateeee = function (methodOptions) {}
    app.config.globalProperties.$Web3 = blockchain;
  },
};
