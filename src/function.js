export default function getFeatures(args) {
  const { special } = args;
  const specialArr = [];

  special.forEach((element) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = element;
    specialArr.push({
      id, name, description, icon,
    });
  });
  return specialArr;
}
