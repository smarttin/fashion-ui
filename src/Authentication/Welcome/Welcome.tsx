import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Button } from '../../components';
import theme, { Box, Text } from '../../components/Theme';
import { welcomePicture } from '../../data';

const { width } = Dimensions.get('window');

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={welcomePicture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height: ((width - theme.borderRadii.xl) * welcomePicture.height) / welcomePicture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="grey" position="absolute" top={0} left={0} right={0} bottom={0} />
        <Box
          flex={1}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below for an amazing experience
          </Text>
          <Button variant="primary" label="Have an account? Login" />
          <Button variant="default" label="Join us, it's Free" />
          <Button variant="transparent" label="Forgot Password" />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
