import DotStore from "./DotStore";
import DotRouter from "./DotRouter";
import DotComponent from "./DotComponent";

class DotApp {
  public $container : HTMLElement | null = null;
  public $store : DotStore;
  public $router : DotRouter;

  private tree : Array<DotComponent> = [];

  constructor(store : DotStore, router : DotRouter) {
    this.$store = !store ? new DotStore({}, this) : store;
    this.$router = !router ? new DotRouter() : router;
  }

  create(container : HTMLElement) {
    this.$container = container;
  }
  
  mount(component : DotComponent, parent : DotComponent | null) {
    component.$parent = parent;
    this.tree.push(component);

    // Append the component to the correct parent
    if (!component.$parent && this.$container) {
      this.$container.appendChild(component);
    } else if (component.$parent?.shadowRoot && this.$container) {
      component.$parent.shadowRoot.append(component);
    } else {
      throw Error('Trying to append a component without parent but app it has not being mounted yet.');
    }
  }

  renderTree() {
    this.tree.forEach((c) => c.render());
  }
}

export default DotApp;
