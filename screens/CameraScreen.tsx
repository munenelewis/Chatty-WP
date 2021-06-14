import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Camera } from "expo-camera";
import ChatListItem from "../components/ChatListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import InputBox from "../components/inputBox";
import NewMessageButton from "../components/floatingButton";
import chatRooms from "../data/ChatRooms";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.on);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>(null);
  const [startOver, setStartOver] = useState(true);

  let camera: Camera;
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // useEffect(() => {
  //   console.log(cameraFlash);
  // }, [cameraFlash]);
  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };
  const __closeCamera = () => {
    setStartOver(true);
  };

  return (
    <View style={styles.container}>
      {!capturedImage ? (
        <Camera
          style={{ flex: 1 }}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
              }}
            >
              <TouchableOpacity onPress={__closeCamera}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  X
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: "5%",
                left: "5%",
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                flex: 1,
                width: "100%",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={__takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                  }}
                />
              </View>
            </View>
          </View>
        </Camera>
      ) : (
        <View>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: capturedImage.uri,
          }}
        />
       <View style={{position: "absolute",bottom:20, width: "100%"}}>
       <InputBox />
       </View>
        </View>
      )}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
