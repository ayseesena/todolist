
import * as Yup from 'yup';

const ContacValidation  = Yup.object().shape({
  Text: Yup.string().required('zorunlu alan'),
  
 
});
export default ContacValidation