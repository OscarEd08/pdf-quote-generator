import { View, StyleSheet } from "@react-pdf/renderer";
import Quote from "../../../types/interfaces";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

const styles = StyleSheet.create({
  table: {    
    width: "auto",
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: 15,
  },
});

const Table = ({ quote }: Quote) => {
  return (
    <View style={styles.table}>
      <TableHeader />
      <TableRow items={quote.items} />
      <TableFooter items={quote.items} />
    </View>
  );
};

export default Table;
