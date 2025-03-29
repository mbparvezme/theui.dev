<script lang="ts">
  import type { PageData } from "./$types"
  import type {NAV_SCROLL_BEHAVIOR } from "theui-svelte/type"
  import {Navbar, NavBrand, NavLinkGroup, NavDropdown, NavLink} from "theui-svelte"
  export let data:PageData
  const values = ['default', 'fixed', 'shrinkOnScrollDown', 'hideOnScrollDown', 'shrinkAndHide'] as const
</script>

<Navbar scrollBehavior={values.includes(data.navType as NAV_SCROLL_BEHAVIOR) ? data.navType as NAV_SCROLL_BEHAVIOR : "default"}>
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

<div class="h-screen"></div>
<div class="h-screen bg-gray-200"></div>
<div class="h-screen"></div>