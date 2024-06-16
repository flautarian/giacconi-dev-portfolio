
const formatDate = (date) => {
    return new Intl.DateTimeFormat('es-ES', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(date);
  }
  
export default formatDate;