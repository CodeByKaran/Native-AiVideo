import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useAppwrite = async fn => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fn();
      if (res) {
        setdata(res);
      } else {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Error", e.message);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => fetchData();

  useEffect(() => {
    fetchData();
  }, [fn]);

  return {
    data,
    loading,
    refetch
  };
};


export default useAppwrite;