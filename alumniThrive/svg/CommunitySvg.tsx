import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {G, Mask, Svg, Rect, Path} from 'react-native-svg';
const CommunitySvg = () => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <Mask
        id="mask0_200_3070"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50">
        <Rect width="50" height="50" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_200_3070)">
        <Path
          d="M19.1106 45.1975C17.5134 45.1975 16.1144 44.7141 14.9139 43.7471C13.7133 42.7803 12.8859 41.541 12.4319 40.0292C12.0099 40.7317 11.4269 41.2692 10.6831 41.6418C9.93922 42.0144 9.15597 42.2007 8.33333 42.2007C6.88299 42.2007 5.65234 41.6943 4.64141 40.6816C3.63047 39.6689 3.125 38.4391 3.125 36.9924C3.125 35.713 3.57104 34.5478 4.46313 33.4967C5.35521 32.4457 6.48101 31.9136 7.84052 31.9002C7.14073 31.2592 6.58719 30.4879 6.1799 29.5865C5.77257 28.685 5.56891 27.7469 5.56891 26.772C5.56891 25.6162 5.85135 24.5326 6.41625 23.5213C6.98115 22.51 7.77241 21.6758 8.79005 21.0188C8.88474 21.326 9.01259 21.6545 9.17359 22.0044C9.33457 22.3543 9.49918 22.6695 9.66745 22.9499C9.02109 23.4387 8.53233 24.0211 8.20115 24.6974C7.86993 25.3735 7.70432 26.0824 7.70432 26.8241C7.70432 28.9822 8.50293 30.3738 10.1002 30.9988C11.6974 31.6238 13.3413 32.1019 15.032 32.433L15.5008 33.2584C15.1188 34.3695 14.809 35.309 14.5713 36.0769C14.3336 36.8448 14.2147 37.5546 14.2147 38.2063C14.2147 39.5044 14.685 40.6402 15.6255 41.6138C16.5661 42.5873 17.7144 43.0741 19.0705 43.0741C20.5502 43.0741 21.7641 42.5172 22.7123 41.4034C23.6605 40.2896 24.4391 38.9675 25.0481 37.437C25.657 35.9066 26.1291 34.3321 26.4643 32.7135C26.7995 31.0949 27.0806 29.7714 27.3077 28.7431L29.367 29.3161C29.0812 30.6916 28.7393 32.2928 28.3414 34.1198C27.9434 35.9467 27.3765 37.6781 26.6406 39.3141C25.9048 40.95 24.9393 42.3396 23.744 43.4827C22.5488 44.6259 21.0043 45.1975 19.1106 45.1975ZM8.33333 40.1173C9.19069 40.1173 9.92587 39.8108 10.5389 39.1978C11.1518 38.5849 11.4583 37.8497 11.4583 36.9924C11.4583 36.135 11.1518 35.3998 10.5389 34.7868C9.92587 34.1739 9.19069 33.8674 8.33333 33.8674C7.47594 33.8674 6.74076 34.1739 6.12781 34.7868C5.51483 35.3998 5.20833 36.135 5.20833 36.9924C5.20833 37.8497 5.51483 38.5849 6.12781 39.1979C6.74076 39.8109 7.47594 40.1173 8.33333 40.1173ZM21.0016 31.5276C19.5913 30.2642 18.3019 29.083 17.1334 27.9839C15.9649 26.8848 14.9553 25.807 14.1047 24.7507C13.2541 23.6943 12.6003 22.638 12.1435 21.5816C11.6867 20.5253 11.4583 19.4256 11.4583 18.2824C11.4583 16.3186 12.1306 14.6644 13.4751 13.32C14.8195 11.9755 16.4736 11.3032 18.4375 11.3032C18.8168 11.3032 19.1586 11.3253 19.4631 11.3693C19.7676 11.4134 20.0561 11.4755 20.3285 11.5556C20.1629 11.2351 20.032 10.9056 19.9359 10.5669C19.8397 10.2283 19.7917 9.87279 19.7917 9.50033C19.7917 8.05359 20.2976 6.82385 21.3094 5.81111C22.3212 4.79837 23.5498 4.29199 24.9953 4.29199C26.4408 4.29199 27.671 4.79837 28.6859 5.81111C29.7008 6.82385 30.2083 8.05359 30.2083 9.50033C30.2083 9.88227 30.1603 10.2382 30.0641 10.568C29.968 10.8979 29.8371 11.2231 29.6715 11.5436C29.9439 11.4635 30.2324 11.4034 30.5369 11.3633C30.8414 11.3233 31.1832 11.3032 31.5625 11.3032C33.1384 11.3032 34.5152 11.7513 35.6931 12.6474C36.871 13.5435 37.679 14.6873 38.117 16.0789C37.7896 16.0281 37.4213 16.0028 37.0121 16.0028C36.6028 16.0028 36.2286 16.0241 35.8894 16.0669C35.5128 15.2683 34.9432 14.6219 34.1807 14.1278C33.4181 13.6336 32.5513 13.3866 31.5802 13.3866C30.273 13.3866 29.2341 13.7224 28.4635 14.3942C27.693 15.0659 26.6907 16.1189 25.4567 17.5532H24.4912C23.2225 16.0762 22.2028 15.0125 21.4323 14.3622C20.6617 13.7118 19.6635 13.3866 18.4375 13.3866C17.0261 13.3866 15.8573 13.8497 14.931 14.776C14.0048 15.7022 13.5417 16.871 13.5417 18.2824C13.5417 19.0896 13.7473 19.923 14.1586 20.7828C14.57 21.6426 15.1616 22.5499 15.9335 23.5048C16.7055 24.4596 17.6416 25.4752 18.742 26.5516C19.8424 27.628 21.0911 28.7912 22.488 30.0412L21.0016 31.5276ZM25 12.6253C25.8574 12.6253 26.5925 12.3188 27.2055 11.7058C27.8185 11.0929 28.125 10.3577 28.125 9.50033C28.125 8.64296 27.8185 7.90779 27.2055 7.29481C26.5925 6.68182 25.8574 6.37533 25 6.37533C24.1426 6.37533 23.4075 6.68182 22.7945 7.29481C22.1815 7.90779 21.875 8.64296 21.875 9.50033C21.875 10.3577 22.1815 11.0929 22.7945 11.7058C23.4075 12.3188 24.1426 12.6253 25 12.6253ZM30.7572 45.2376C30.2629 45.2376 29.7743 45.1847 29.2912 45.0789C28.8082 44.9731 28.342 44.8056 27.8926 44.5765C28.0857 44.3268 28.2788 44.0326 28.4718 43.6938C28.6649 43.3549 28.8404 43.0429 28.9984 42.7576C29.3069 42.8856 29.6154 42.977 29.9239 43.0318C30.2324 43.0867 30.5409 43.1141 30.8494 43.1141C32.2009 43.1141 33.3567 42.6286 34.3169 41.6576C35.2771 40.6866 35.7572 39.5321 35.7572 38.1943C35.7572 37.5426 35.6383 36.8395 35.4006 36.0849C35.1629 35.3304 34.8531 34.3975 34.4711 33.2864L34.9799 32.4611C36.7054 32.1299 38.3581 31.6451 39.9379 31.0068C41.5178 30.3684 42.3077 28.9702 42.3077 26.812C42.3077 25.1294 41.7154 23.882 40.5308 23.0701C39.3463 22.2581 38.0128 21.8521 36.5305 21.8521C35.1304 21.8521 33.497 22.0899 31.6303 22.5653C29.7635 23.0407 27.6082 23.6857 25.1643 24.5004L24.5914 22.4411C26.9792 21.6798 29.1285 21.0308 31.0394 20.4939C32.9502 19.9571 34.7045 19.6887 36.3021 19.6887C38.4041 19.6887 40.2778 20.307 41.9231 21.5436C43.5684 22.7803 44.391 24.5364 44.391 26.812C44.391 27.7755 44.1941 28.6908 43.8001 29.5579C43.4061 30.425 42.8593 31.2058 42.1595 31.9002C43.519 31.9403 44.6448 32.4724 45.5369 33.4967C46.429 34.521 46.875 35.6862 46.875 36.9924C46.875 38.4079 46.3695 39.6299 45.3586 40.6582C44.3477 41.6865 43.117 42.2007 41.6667 42.2007C40.844 42.2007 40.0608 42.0144 39.3169 41.6418C38.5731 41.2692 37.9901 40.7317 37.5681 40.0292C37.1141 41.541 36.2734 42.787 35.0461 43.7672C33.8188 44.7474 32.3892 45.2376 30.7572 45.2376ZM41.7187 40.1173C42.5761 40.1173 43.3026 39.8108 43.8982 39.1978C44.4939 38.5849 44.7917 37.8497 44.7917 36.9924C44.7917 36.135 44.4852 35.3911 43.8722 34.7608C43.2592 34.1304 42.5241 33.8153 41.6667 33.8153C40.8093 33.8153 40.0741 34.1218 39.4611 34.7348C38.8482 35.3477 38.5417 36.0829 38.5417 36.9403C38.5417 37.7976 38.8568 38.5415 39.4872 39.1718C40.1175 39.8022 40.8614 40.1173 41.7187 40.1173Z"
          fill="#4253F0"
        />
      </G>
    </Svg>
  );
};

export default CommunitySvg;

const styles = StyleSheet.create({});