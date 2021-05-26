import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {

  return (
    <>
    {
    //loading
    }
      <GradientsSelect />
        {
    //error
    }
      <GradientsList />
    </>
  )
}

export default Gradients
