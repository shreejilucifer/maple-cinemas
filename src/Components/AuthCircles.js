import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

import navbarCircles from '../../assets/navbar-circles.webp';

const styles = StyleSheet.create({
  navbarCircles: {
    marginTop: -720,
    width: '100%',
  },
});

const AuthCircles = () => {
  return (
    <Image source={navbarCircles} style={styles.navbarCircles} />
  )
}

export default AuthCircles ;

