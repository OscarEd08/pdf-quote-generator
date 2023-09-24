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
  titleContainer: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  reportTitle: {
    color: colors.title,
    fontSize: 9,
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: "ultrabold",
    marginBottom: 5,
  },
  reportData: {
    color: colors.title,
    fontSize: 8,
    fontFamily: "Roboto",
  },
});

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>
        IMPORTACIONES Y MAQUINARIAS GLORY SAC
      </Text>
      <Text style={styles.reportData}>
        Calle de la Tecnica 280 Of 1006 San Borja
      </Text>
      <Text style={styles.reportData}>Tele: +51 978146771</Text>
      <Text style={styles.reportData}>+51 918804889</Text>
    </View>
  );
};

export default Title;
