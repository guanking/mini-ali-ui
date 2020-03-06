import fmtUnit from '../_util/fmtUnit';

Component({
  props: {
    className: '',
    // normal: 基础样式；
    // guide：文案加引导；
    // copyright：声明；
    // brand：带品牌；
    // link：带链接
    // end: 没有更多
    type: 'normal',
    content: '',
    extend: [],
    onBrandTap: () => { },
    showEndIcon: false,
    iconName: 'selected',
  },
  data: {
    defaultSize: fmtUnit(18),
    maxSize: fmtUnit(22),
    valueUnit: fmtUnit('px'),
  },
  methods: {
    onBrandClick(e) {
      const brandLink = e.currentTarget.dataset.url;
      const { onBrandTap, extend } = this.props;
      if (onBrandTap !== '' && brandLink) {
        my.navigateTo({
          url: brandLink,
        });
      }
      if (onBrandTap !== '' && !brandLink && typeof onBrandTap === 'function') {
        onBrandTap(extend[e.currentTarget.dataset.index]);
      }
    },
  },
});
