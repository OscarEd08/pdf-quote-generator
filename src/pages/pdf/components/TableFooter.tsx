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
  row: {
    margin: "auto",
    flexDirection: "row",
  },
  description: {
    width: "85%",
    borderStyle: "solid",
    borderWidth: 1,
    border: 0,
  },
  total: {
    width: "15%",
    borderStyle: "solid",
    textAlign: "center",
    borderLeftWidth: 2,
    borderTopWidth: 1,
    borderRightWidth: 0,
  },
  descriptionCell: {
    fontFamily: "Roboto",
    textAlign: "right",
    paddingRight: 10,
    marginTop: 5,
    fontSize: 9,
    fontWeight: "ultrabold",
  },
  totalCell: {
    fontFamily: "Roboto",
    marginTop: 5,
    fontSize: 10,
    fontWeight: "ultrabold",
  },
});

const TableFooter = ({ items }: { items: Quote["quote"]["items"] }) => {
  const total: number = items
    .map((item) => item.qty * item.unit_price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <View style={styles.row}>
      <View style={styles.description}>
        <Text style={styles.descriptionCell}>TOTAL</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalCell}>{total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default TableFooter;
