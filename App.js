import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const App = () => {
  const [resultado, setResultado] = useState("");
  const [imagemMoeda, setImagemMoeda] = useState("");

  const jogarMoeda = () => {
    const numero = Math.random();
    const novoResultado = numero < 0.5 ? "Cara" : "Coroa";
    setResultado(novoResultado);

    if (novoResultado === "Cara") {
      setImagemMoeda("Cara");
    } else {
      setImagemMoeda("Coroa");
    }
  };

  return (
    <View className="flex flex-1 items-center justify-center bg-green-700">
      <Text className="text-5xl mb-20 text-yellow-400 font-bold">
        Flip Coin
      </Text>
      <TouchableOpacity onPress={jogarMoeda}>
        {imagemMoeda === "cara" ? (
          <Image className="w-52 h-52" source={require("./assets/cara.png")} />
        ) : (
          <Image className="w-52 h-52" source={require("./assets/cara.png")} />
        )}
        {/* <Image source={require('./images/real_cara.png')} style={{ width: 200, height: 200 }} /> */}
      </TouchableOpacity>
      {resultado !== "" && (
        <Text className="text-2xl mt-5 text-yellow-400">{resultado}</Text>
      )}
    </View>
  );
};

export default App;
