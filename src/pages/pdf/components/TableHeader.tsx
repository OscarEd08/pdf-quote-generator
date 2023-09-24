import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { colors } from "../../../utils/colors";

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
    backgroundColor: colors.table,
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
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  cell: {
    fontFamily: "Roboto",
    fontWeight: "ultrabold",
    margin: "auto",
    marginTop: 5,
    fontSize: 9,
  },
});

const TableHeader = () => (
  <View style={styles.row}>
    <View style={styles.item}>
      <Text style={styles.cell}>ITEM</Text>
    </View>
    <View style={styles.description}>
      <Text style={styles.cell}>DESCRIPCIÓN</Text>
    </View>
    <View style={styles.qty}>
      <Text style={styles.cell}>CANT.</Text>
    </View>
    <View style={styles.unit_measure}>
      <Text style={styles.cell}>U. MEDIDA</Text>
    </View>
    <View style={styles.unit_price}>
      <Text style={styles.cell}>P. UNIT</Text>
    </View>
    <View style={styles.amount}>
      <Text style={styles.cell}>TOTAL</Text>
    </View>
  </View>
);

export default TableHeader;
