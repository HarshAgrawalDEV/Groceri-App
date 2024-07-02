import { View, Text, Image, Pressable, ToastAndroid, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import EMPTYCART from "@/assets/images/empty-cart.webp";
import { selectEmail, selectUserId } from "../redux/slices/tokenSlice";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const [quantity, setQuantity] = useState(cartItems?.quantity || 1);

  const email = useSelector(selectEmail);
  console.log(email);
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null);

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.126:3000/home/cart/${email}`
        );
        if (response.status !== 200) {
          throw new Error(response);
        } else {
          const data = await response.json();
          if (data.cart && data.cart.items) {
            setCartItems(data.cart.items);
            console.log(data.cart._id);
            setCartId(data.cart._id)
          } else {
            setCartItems([]);
          }
        }
      } catch (error) {
        ToastAndroid.show(error.message, ToastAndroid.TOP);
      }
    };
    fetchCartDetails();
  }, [email]);

  const calculateTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  const handleQuantity = (operator) => {
    setQuantity((prev) => {
        if (prev == 0 && operator == -1) {
            return prev;
        }
        return (prev += operator);
    });
};

  return (
    <ScrollView>
    <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Cart Details
      </Text>

      {cartItems.length === 0 ? (
        <View style={{ alignItems: "center" }}>
          <Image
            source={EMPTYCART}
            style={{ width: 200, height: 200, marginBottom: 16 }}
          />
          <Text
            style={{ fontSize: 20, fontWeight: "medium", marginBottom: 16 }}
          >
            No products in cart
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {cartItems.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  marginBottom: 16,
                  width: "48%",
                }}
              >
                <Image
                  source={{ uri: item.product.images[0] }}
                  style={{
                    width: "80%",
                    height: 140,
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <View style={{ padding: 12 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 8,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ color: "gray", marginBottom: 8 }}>
                    Quantity: {item.quantity}
                  </Text>

                  <Text className="text-gray-600 mb-2">
                    Total: <Text className="mx-0.5">&#8377;</Text>
                    {(item.product.price * item.quantity).toFixed(2)}
                  </Text>

                  <View className=" my-3 py-3 border border-gray-200 rounded-xl w-36  flex flex-row justify-start items-center ">
                    <Pressable
                      className="mx-3.5 hover:bg-slate-400 hover:p-1"
                      onPress={() => {
                        handleQuantity(-1);
                      }}
                    >
                      <AntDesign name="minuscircle" size={20} color="#02B290" />
                    </Pressable>
                    <View>
                      <Text className=" mx-5 text-[18px] font-semibold">
                        {quantity}
                      </Text>
                    </View>
                    <Pressable
                      className="mx-3 hover:bg-slate-400 hover:p-1"
                      onPress={() => {
                        handleQuantity(+1);
                      }}
                      key={index}
                    >
                      <AntDesign name="pluscircle" size={20} color="#02B290" />
                    </Pressable>
                  </View>

                  <Pressable
                    // onPress={() => handleRemoveItem(item.name)}
                    style={{
                      backgroundColor: "red",
                      padding: 8,
                      borderRadius: 5,
                    }}
                    key={index}
                  >
                    <Text style={{ color: "white" }}>Remove</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Total section */}
      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Total: ₹{calculateTotal.toFixed(2)}
        </Text>
      </View>
    </View>
    </ScrollView>
    // <></>
  );
};

export default Cart;
