import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { addFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {

    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        dispatch(addFilter(event.target.value))
    }
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input type="text" value={filter} onChange={handleFilter} placeholder="Search contacts..."/>
        </div>
    )
}