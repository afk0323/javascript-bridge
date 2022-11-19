const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(this.BRIDGE_SIZE, (number) => {
      this.validateBridgeSize(number);
    });
  },

  // 숫자는 문자열로 들어온다.
  validateBridgeSize(number) {
    // 문자열에서 0-9까지 검사함
    if (/[^0-9]/g.test(number)) {
      throw new Error('[ERROR] 다리 길이는 숫자로 입력해야합니다.');
    }

    if (Number(number) < 3 || Number(number) > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
