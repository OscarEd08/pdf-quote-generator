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
  quoteNoContainer: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  quoteDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  label: {
    width: 40,
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: "ultrabold",
  },
  quoteDate: {
    fontSize: 10,
    fontFamily: "Roboto",
  },
});

const QuoteNo = ({ quote }: Quote) => {
  return (
    <>
      <View style={styles.quoteNoContainer}>
        <Text style={styles.label}>N°:</Text>
        <Text style={styles.quoteDate}>{quote.quote_no}</Text>
      </View>
      <View style={styles.quoteDateContainer}>
        <Text style={styles.label}>Fecha: </Text>
        <Text style={styles.quoteDate}>{quote.quote_date}</Text>
      </View>
    </>
  );
};

export default QuoteNo;
