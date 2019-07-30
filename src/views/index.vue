<template>
  <div class="app-container">
    <!-- <h1>top交易大赛</h1> -->
    <div class="one">
      <img src="../assets/title.png" style="width:80%" />
      <img src="../assets/bg.png" />
      <img src="../assets/gift.png" />
      <div class="input-box">
        <div class="input-box__input clearfix">
          <el-form :model="ruleForm" status-icon :rules="rule" ref="ruleForm" class="demo-ruleForm">
            <div class="swap-input left bg">
              <div class="title">
                <img src="../assets/eth.png" />
                <span>TOP-ERC20</span>
              </div>
              <div class="swap-input--title">You send</div>
              <el-form-item label prop="number">
                <el-input v-model.number="ruleForm.number" placeholder="1,000"></el-input>
              </el-form-item>
            </div>
            <div class="swap-input left bg_dark">
              <div class="title">
                <img src="../assets/bnb.png" />
                <span>TOP-Binance DEX</span>
              </div>
              <div class="swap-input--title">You get</div>
              <el-form-item label prop="number">
                <el-input v-model.number="ruleForm.number" placeholder="1,000" disabled></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
      <div class="btn-box">
        <button class="btn">立即兑换</button>
      </div>
    </div>
    <div class="two">
      <h3>活动时间：</h3>
      <p>2019年07月20日上午8:00至2019年07月27日上午8:00 (新加坡时间)</p>
      <h3>奖池额度：</h3>
      <p>2000000 TOP + 200 BNB</p>
      <h3 style="margin-bottom:20px;">活动规则：</h3>
      <p>
        1. 活动期间确保至少一天在Binance DEX上交易量满30万TOP，且钱包地址持仓不少于1万 TOP和2BNB (随机进行持仓快照)
        <br />2. 交易量包含买入及卖出。Wash Trade交易不计入交易量（如A与B两个账号之间反复）
        <br />3. 满足以上条件的交易者，按交易占符合条件交易者的交易总量占比瓜分奖金池。
        <br />4. 7天交易大赛结束之后，一天内会统计并公告结果，同时进行奖励发放。
      </p>
      <h3 style="margin-bottom:20px;">活动协议和注意事项：</h3>
      <p>
        1.TOP Network将保留对本次活动的最终解释权；
        <br />2.活动期间如有恶意刷量行为，将取消参赛资格；
        <br />3. 每天是指当日上午8:00至次日上午8:00（新加坡时间）；
        <br />4. 持仓快照：按照每日上午8:00（新加坡时间）前Binance Chain的最后一个区块生成时间，第一次快照时间从2019年7月20日上午8:00（新加坡时间）开始。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    const num = /^[1-9]\d{3,}/;
    const validateNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("*Please input no less than 1,000"));
      } else if (!num.test(value)) {
        callback(new Error("*Please input no less than 1,000"));
      } else {
        callback();
      }
    };
    return {
      number: 0,
      ruleForm: {
        number: ""
      },
      rule: {
        number: [{ required: true, trigger: "blur", validator: validateNumber }]
      }
    };
  }
};
</script>
<style rel="stylesheet/stylus" lang="stylus" scoped>
h1 {
  font-size: 100px; /* px */
  text-align: center;
  margin-top: 10vh;
}

.one {
  background: linear-gradient(132deg, rgba(39, 46, 62, 1) 0%, rgba(20, 24, 30, 1) 100%);
  padding: 32px 0; /* px */
  text-align: center;
}

.bg {
  background: url('../assets/input.png') no-repeat;
  background-size: 100% 100%;
}

.bg_dark {
  background: rgba(255, 207, 8, 1);
  opacity: 0.6;
  border-radius: 0px 5px 5px 0px;
}

.left {
  float: left;
  width: 50%;
}

.clearfix {
  &:before, &:after {
    display: table;
    content: '';
  }

  &:after {
    clear: both;
  }
}

.input-box {
  padding: 0 20px; /* px */
}

img {
  display: inline-block;
  width: 100%;
}

.swap-input {
  text-align: left;
  box-sizing: border-box;
  padding: 20px; /* px */

  .title {
    margin: 20px 0;

    img {
      width: 50px; /* px */
      vertical-align: middle;
    }

    span {
      font-weight: 800;
      line-height: 20px;
      color: rgba(0, 0, 0, 1);
    }
  }

  &--title {
    font-weight: 500;
    line-height: 20px; /* px */
    color: rgba(0, 0, 0, 1);
    margin: 20px 0; /* px */
  }
}

.btn-box {
  .btn {
    width: 336px; /* px */
    height: 50px; /* px */
    background: rgba(239, 186, 14, 1);
    box-shadow: 0px 0px 16px rgba(255, 207, 8, 1);
    opacity: 1;
    border-radius: 25px; /* px */
    margin: 25px 0; /* px */
    color: #fff;
  }
}

.two {
  background: rgba(20, 24, 30, 1);
  opacity: 1;
  padding: 30px 20px; /* px */

  h3 {
    font-size: 25px; /* px */
    color: #fff;
  }

  p {
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px; /* px */
  }
}
</style>
