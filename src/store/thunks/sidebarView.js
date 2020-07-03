import { setSidebarView } from "store/actions/sidebarView";

export const sidebarView = ({ toggleView }) => (dispatch) => {
  dispatch(setSidebarView(toggleView));
};
