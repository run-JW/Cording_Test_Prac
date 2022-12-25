// recursive dfs
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

    bool isTarget(TreeNode* source) {
        return (source == target) ? true : false;
    }
};

// iterative dfs
class IterSolution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        stack<TreeNode*> stack_o;
        stack<TreeNode*> stack_c;
        TreeNode* node_o = original;
        TreeNode* node_c = cloned;

        while (!stack_o.empty() || node_o != nullptr) {
            if (result != nullptr)
                break;

            while (node_o != nullptr) {
                stack_o.push(node_o);
                stack_c.push(node_c);

                node_o = node_o->left;
                node_c = node_c->left;
            }
            node_o = stack_o.top();
            node_c = stack_c.top();
            stack_o.pop();
            stack_c.pop();

            if (node_o == target) {
                result = node_c;
            }

            node_o = node_o->right;
            node_c = node_c->right;
        }
        return result;
    }
private:
    TreeNode* result = nullptr;
};

// bfs
class BfsSolution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
       queue<TreeNode*> queue_o;
       queue<TreeNode*> queue_c;

       queue_o.push(original);
       queue_c.push(cloned);

       while (!queue_o.empty() && result == nullptr) {
           TreeNode* node_o = queue_o.front();
           TreeNode* node_c = queue_c.front();

           queue_o.pop();
           queue_c.pop();

           if (node_o == target) {
               result = node_c;
           }

           if (node_o->left != nullptr) {
               queue_o.push(node_o->left);
               queue_c.push(node_c->left);
           }
           if (node_o->right != nullptr) {
               queue_o.push(node_o->right);
               queue_c.push(node_c->right);
           }
       }
       return result;
    }
private:
  TreeNode* result = nullptr;
};
