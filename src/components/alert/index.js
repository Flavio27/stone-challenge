import React  from "react";
import { useClienteData } from "../../store/Clients";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function Alert() {
  const { dispatchScreen, screen } = useClienteData();

  const handleClose = () => {
    dispatchScreen({
      type: "ACTIVE_ALERT_SIGNUP",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_ALERT_EDIT",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_ALERT_DELET",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_ALERT_SAVE",
      payload: false,
    });
    dispatchScreen({
      type: "ACTIVE_ALERT_FILTER",
      payload: false,
    });
  };

  return (
    <Snackbar
      color="primary"
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={true}
      autoHideDuration={3000}
      onClose={handleClose}
      message={
        (screen.alert.signup && "Cadastro Feito com sucesso!") ||
        (screen.alert.edit && "Alterado com sucesso!") ||
        (screen.alert.delet && "Excluido com sucesso!") ||
        (screen.alert.script && "Roteiro salvo com sucesso!") ||
        (screen.alert.filter &&
          `${screen.AllFiltred.length} itens ${
            screen.AllFiltred.length > 1 ? "Encontrados..." : "Encontrado..."
          }`)
      }
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
}
