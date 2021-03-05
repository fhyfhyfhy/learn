import React from 'react';
import {ToastAndroid} from 'react-native';

/**
 *
 * @param {String} text 文本内容
 * @param {Number} offset 上下偏移量
 */
export default function showToast(text, offset = 0) {
  ToastAndroid.showWithGravityAndOffset(
    text,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    220,
  );
}
