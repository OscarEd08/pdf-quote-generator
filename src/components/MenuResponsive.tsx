import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArchiveIcon from "@mui/icons-material/Archive";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const MenuResponsive = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Formulario"
            icon={<TextSnippetIcon />}
            value="pdf-quote-generato"
            onClick={() => {
              navigate("/pdf-quote-generato");
            }}
          />
          <BottomNavigationAction
            label="Vista PDF"
            icon={<PictureAsPdfIcon />}
            value="pdf"
            onClick={() => {
              navigate("/pdf");
            }}
          />
          <BottomNavigationAction
            label="Descargar"
            icon={<ArchiveIcon />}
            value="download"
            onClick={() => {
              navigate("/download");
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MenuResponsive;
