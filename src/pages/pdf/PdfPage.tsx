import {
  Page,
  Document,
  Image,
  Font,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import logo from "../../assets/img/logo-portada.jpg";
import Table from "./components/Table";
import Title from "./components/Title";
import QuoteNo from "./components/QuoteNo";
import Quote from "../../types/interfaces";
import BillTo from "./components/BillTo";
import Footer from "./components/Footer";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc9.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Roboto",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  header: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  containerImage: {
    flexDirection: "column",
    flexGrow: 9,
  },
  image: {
    width: 200,
    height: 66,
  },
});

const PdfPage = ({ quote }: Quote) => {
  return (
    <Document title="Cotización">
      <Page size="A4" style={styles.page}>
        <View style={styles.containerHeader}>
          <View style={styles.containerImage}>
            <Image src={logo} style={styles.image} />
          </View>
          <Title />
        </View>
        <QuoteNo quote={quote} />
        <BillTo quote={quote} />
        <Table quote={quote} />
        <Footer />
      </Page>
    </Document>
  );
};

export default PdfPage;
