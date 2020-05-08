import React, {useEffect} from 'react';
import {View, Vibration} from 'react-native';
import {Icon, Text, Overlay} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import {connectionDialog} from '../../store/actions/dialog';
import {styles} from './Dialog.style';

const Dialog = props => {
  const visibility = useSelector(state => state.dialog.isVisible);
  const message = useSelector(state => state.dialog.message);
  const icon = useSelector(state => state.dialog.icon);
  const dispatch = useDispatch();

  const toggleOverlay = () => {
    dispatch(connectionDialog(!visibility));
  };

  useEffect(() => {
    Vibration.vibrate(1000);
  }, [visibility]);

  return (
    <View>
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visibility}
        onBackdropPress={toggleOverlay}>
        <View style={styles.container}>
          <Icon
            containerStyle={styles.iconContainer}
            iconStyle={styles.icon}
            size={56}
            name={icon}
            type="font-awesome"
          />
          <Text style={styles.message}>{message}</Text>
          {props.children}
        </View>
      </Overlay>
    </View>
  );
};

export default Dialog;
