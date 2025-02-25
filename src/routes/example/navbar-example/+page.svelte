<script lang="ts">
  import {Navbar, NavBrand, NavLinkGroup, NavDropdown, NavLink} from "theui-svelte"
</script>

<Navbar>
  <NavBrand href="/">BRAND</NavBrand>
  <NavLinkGroup>
    <NavLink href="/" text="Link 1" />
    <NavLink href="/" text="Link 2" />
    <NavLink href="/" text="Link 3" />
    <NavDropdown label="Dropdown">
      <NavLink href="/" text="Dropdown Link 1" />
      <NavLink href="/" text="Dropdown Link 2" />
      <NavLink href="/" text="Dropdown Link 3" />
    </NavDropdown>
  </NavLinkGroup>
</Navbar>