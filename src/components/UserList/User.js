export function User({img, firstname, lastname}) {
  return <div>
    <img width="100px" height="100px" src={img} />
    <span>{firstname}</span>
    <span>{lastname}</span>
    <button>Edit</button>
  </div>
}