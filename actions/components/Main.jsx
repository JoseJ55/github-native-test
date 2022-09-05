import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { mainTest } from "./../redux/Actions/main";;
import { View, Text } from "react-native"

function Main() {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainTest())
        .then((res) => {
            setText(res.payload);
        })
        setLoading(false);

        return () => setLoading(true)
    }, [])

    if(loading){
        return(<View></View>)
    } else {
        return (
          <View>
              <Text>{text}</Text>
          </View>
        )
    }
}

export default Main