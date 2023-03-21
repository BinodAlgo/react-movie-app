

const AppTitle = (props) => {
  const {title = "Box Office",subTitle = "Are you looking for movie or an actor/actress"} = props
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  )
}

export default AppTitle