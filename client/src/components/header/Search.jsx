import { InputBase , Box, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
  background:#fff;
  width:38%;
  border-radius:2px;
  margin-left:10px;
  display:flex;
`;

const SearchIconWrapper = styled(SearchIcon)`
  color:blue;
  padding:5px;
`;

const StyledInputBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const Search = ()=>{
    return (
        <SearchContainer>
                <StyledInputBase
                   placeholder="Search for products,brand and more"
                />
                <SearchIconWrapper>
                  <SearchIcon/>
                </SearchIconWrapper>
        </SearchContainer>         
    )
}

export default Search;

