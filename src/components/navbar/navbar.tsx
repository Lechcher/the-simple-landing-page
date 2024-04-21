import styles from './navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.brand}>PageCrafters</div>
            <div className={styles.navbutton}>
                <div className={styles.textcontainer} />
                Get in Touch
            </div>
            <div className={styles.navlinks}>
                <div className={styles.navlink}>Start Here</div>
                <div className={styles.navlink}>Our Story</div>
                <div className={styles.navlink}>Shop Now</div>
            </div>
        </div>
    );
};
