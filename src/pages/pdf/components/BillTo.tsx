import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import Quote from "../../../types/interfaces";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf",
      fontWeight: "ultrabold",
    },
  ],
});

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  textContainer: {
    flexDirection: "row",
    paddingBottom: 3,
  },
  billTo: {
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: "ultrabold",
  },
  text: {
    fontSize: 10,
    fontFamily: "Roboto",
  },
});

const BillTo = ({ quote }: Quote) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.billTo}>Cliente: </Text>
        <Text style={styles.text}>{quote.client}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.billTo}>RUC: </Text>
        <Text style={styles.text}>{quote.ruc}</Text>
      </View>
    </View>
  );
};

export default BillTo;
