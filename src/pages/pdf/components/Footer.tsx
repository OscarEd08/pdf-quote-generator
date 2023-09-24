import { Text, Font, StyleSheet, View } from "@react-pdf/renderer";
import { colors } from "../../../utils/colors";

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
  container: {
    marginTop: 36,
    fontFamily: "Roboto",
    fontSize: 8,
    color: colors.footer,
    marginLeft: 40,
  },
  igv: {
    marginBottom: 20,
    fontWeight: "bold",
  },
  info: {
    marginBottom: 6,
  },
  atteContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 20,
  },
  atte: {
    flexDirection: "column",
    flexGrow: 5,
    fontWeight: "bold",
  },
  firma: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  supervisor: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  email: {
    color: colors.title,
  },
  direccion: {
    marginTop: 60,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    marginRight: 50,
  },
});

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.igv}>
        <Text>LOS PRECIOS ESTAN EXPRESADOS EN SOLES, INCLUYEN EL IGV</Text>
      </View>
      <View style={styles.info}>
        <Text>TIPO DE ENTREGA : CONTRAENTREGA</Text>
      </View>
      <View style={styles.info}>
        <Text>TIEMPO DE PAGO :</Text>
      </View>
      <View style={styles.info}>
        <Text>DISPONIBILIDAD DE EQUIPOS </Text>
      </View>
      <View style={styles.info}>
        <Text>GARANTIA: 1 año</Text>
      </View>
      <View style={styles.atteContainer}>
        <View style={styles.atte}>
          <Text>Atentamente,</Text>
        </View>
        <View style={styles.firma}>
          <Text>___________________________________</Text>
          <Text style={styles.supervisor}>
            Carlos Cáceda Urteaga Supervisor{" "}
          </Text>
          <Text style={styles.email}>importacionesglory@c.caceda</Text>
        </View>
      </View>
      <Text style={styles.direccion}>
        Calle de la Tecnica 280 Of 1006 San Borja
      </Text>
    </View>
  );
};

export default Footer;
