class Solution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        this->target = target;
        findTarget(original, cloned);
        return result;
    }
private:
    TreeNode* result = nullptr;
    TreeNode* target = nullptr;

    void findTarget(TreeNode* o, TreeNode* c) {
        if (o != nullptr && result == nullptr) {
            findTarget(o->left, c->left);
            checkTargetAndGetCloneRef(o, c);
            findTarget(o->right, c->right);
        }
    }

    void checkTargetAndGetCloneRef(TreeNode* o, TreeNode* c) {
        if (isTarget(o)) {
            result = c;
        }
    }

    int isTarget(TreeNode* source) {
        return (source == target) ? 1 : 0;
    }
};
