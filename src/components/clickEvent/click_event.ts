import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class ClickEventComponent extends Vue {
  public countNumber: string = "";

  public addCount() {
    this.countNumber = "あああああ";
  }
}
