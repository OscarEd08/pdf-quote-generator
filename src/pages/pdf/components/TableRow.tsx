import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import Quote from "../../../types/interfaces";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  row: {
    margin: "auto",
    flexDirection: "row",
  },
  item: {
    width: "8%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  description: {
    width: "47%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  qty: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  unit_measure: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  unit_price: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  amount: {
    width: "15%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  cell: {
    fontFamily: "Roboto",
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

const TableRow = ({ items }: { items: Quote["quote"]["items"] }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.sno.toString()}>
      <View style={styles.item}>
        <Text style={styles.cell}>{item.sno}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.cell}>{item.desc}</Text>
      </View>
      <View style={styles.qty}>
        <Text style={styles.cell}>{item.qty}</Text>
      </View>
      <View style={styles.unit_measure}>
        <Text style={styles.cell}>{item.unit_measure}</Text>
      </View>
      <View style={styles.unit_price}>
        <Text style={styles.cell}>{item.unit_price}</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.cell}>
          {(item.qty * item.unit_price).toFixed(2)}
        </Text>
      </View>
    </View>
  ));
  return <>{rows}</>;
};

export default TableRow;
